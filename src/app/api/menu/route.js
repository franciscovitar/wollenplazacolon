import Papa from 'papaparse';

export const dynamic = 'force-dynamic';
export const revalidate = 300; // 5 minutos

export async function GET() {
  try {
    const csvUrl = process.env.MENU_CSV_URL;

    if (!csvUrl) {
      return Response.json(
        { error: 'MENU_CSV_URL no está configurado' },
        { status: 500 }
      );
    }

    // Fetch CSV desde Google Sheets
    const response = await fetch(csvUrl, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Error al descargar CSV: ${response.status}`);
    }

    const csvText = await response.text();

    // Parsear CSV
    const parseResult = await new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results),
        error: (error) => reject(error),
      });
    });

    if (parseResult.errors && parseResult.errors.length > 0) {
      throw new Error('Error al parsear CSV');
    }

    // Normalizar y filtrar datos
    const items = parseResult.data
      .map((row) => ({
        categoria: row.Categoria?.trim() || '',
        subcategoria: row.Subcategoria?.trim() || '',
        producto: row.Producto?.trim() || '',
        descripcion: row.Descripcion?.trim() || '',
        precio: row.Precio?.trim() || null,
        moneda: row.Moneda?.trim() || 'ARS',
        estado: row.Estado?.trim() || '',
        orden: parseInt(row.Orden, 10) || 0,
      }))
      .filter((item) => item.estado === 'ACTIVO')
      .sort((a, b) => {
        // Ordenar por Categoria > Subcategoria > Orden
        if (a.categoria !== b.categoria) {
          return a.categoria.localeCompare(b.categoria);
        }
        if (a.subcategoria !== b.subcategoria) {
          return a.subcategoria.localeCompare(b.subcategoria);
        }
        return a.orden - b.orden;
      });

    return Response.json(
      {
        updatedAt: new Date().toISOString(),
        items,
      },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error) {
    console.error('Error en API de menú:', error);
    return Response.json(
      { error: 'Error al procesar el menú', details: error.message },
      { status: 500 }
    );
  }
}
