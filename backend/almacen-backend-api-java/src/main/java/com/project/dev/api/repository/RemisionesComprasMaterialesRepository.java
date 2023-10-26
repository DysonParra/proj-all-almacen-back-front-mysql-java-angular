/*
 * @fileoverview    {RemisionesComprasMaterialesRepository}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.repository;

import com.project.dev.api.domain.RemisionesComprasMateriales;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * TODO: Definición de {@code RemisionesComprasMaterialesRepository}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@org.springframework.stereotype.Repository
public interface RemisionesComprasMaterialesRepository extends JpaRepository<RemisionesComprasMateriales, Long> {

    /**
     * Busca en base de datos los registros que contengan una cadena específica.
     *
     * @param strSearch la cadena a buscar en base de datos.
     * @return los registros obtenidos.
     */
    // TODO: Especificar campo de la entidad donde realizar la búsqueda.
    @Query("SELECT m FROM RemisionesComprasMateriales m WHERE m.intIdRemisionCompraMaterial LIKE CONCAT('%', :strSearch, '%')")
    public List<RemisionesComprasMateriales> searchEntities(@Param("strSearch") String strSearch);

    /**
     * Busca en base de datos los registros que contengan una cadena específica.
     *
     * @param strSearch la cadena a buscar en base de datos.
     * @param pageable  indica la manera en que se paginarán los registros obtenidos.
     * @return los registros obtenidos.
     */
    // TODO: Especificar campo de la entidad donde realizar la búsqueda.
    @Query("SELECT m FROM RemisionesComprasMateriales m WHERE m.intIdRemisionCompraMaterial LIKE CONCAT('%', :strSearch, '%')")
    public Page<RemisionesComprasMateriales> searchEntities(@Param("strSearch") String strSearch, Pageable pageable);
}
