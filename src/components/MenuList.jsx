import { motion } from 'framer-motion';
import styles from './MenuList.module.scss';

export default function MenuList({ groupedItems }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className={styles.menuContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {Object.entries(groupedItems).map(([categoria, subcategorias]) => (
        <div key={categoria} className={styles.categoriaSection}>
          <h2 className={styles.categoriaTitulo}>{categoria}</h2>

          {Object.entries(subcategorias).map(([subcategoria, productos]) => (
            <div key={subcategoria} className={styles.subcategoriaSection}>
              <h3 className={styles.subcategoriaTitulo}>{subcategoria}</h3>

              <div className={styles.productosList}>
                {productos.map((producto, idx) => (
                  <motion.div
                    key={idx}
                    className={styles.productoItem}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className={styles.productoHeader}>
                      <h4 className={styles.productoNombre}>
                        {producto.producto}
                      </h4>
                      <span className={styles.precio}>
                        {producto.precio
                          ? `$${producto.precio} ${producto.moneda}`
                          : 'Consultar'}
                      </span>
                    </div>
                    {producto.descripcion && (
                      <p className={styles.descripcion}>
                        {producto.descripcion}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}
