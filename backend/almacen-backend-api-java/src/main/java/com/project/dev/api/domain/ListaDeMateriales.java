/*
 * @fileoverview    {ListaDeMateriales} se encarga de realizar tareas específicas.
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code ListaDeMateriales}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"ListaDeMateriales\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ListaDeMateriales implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdListaMaterial;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaInicio;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaFin;
    private Integer intCantidad;
    @Column(precision = 18, scale = 1)
    private BigDecimal decPrecioUnitario;
    @Column(length = 100)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdBodega", referencedColumnName = "intIdBodega")
    private Long intIdBodega;
    @JoinColumn(name = "intIdTipoListaMaterial", referencedColumnName = "intIdTipoListaMaterial")
    private Long intIdTipoListaMaterial;
    @JoinColumn(name = "intIdListaPrecio", referencedColumnName = "intIdListaPrecio")
    private Long intIdListaPrecio;
    @JoinColumn(name = "strCodigoMaterial", referencedColumnName = "strCodigoMaterial")
    private String strCodigoMaterial;
    @JoinColumn(name = "strCodigoComponente", referencedColumnName = "strCodigoMaterial")
    private String strCodigoComponente;
    @JoinColumn(name = "intIdUnidadMedida", referencedColumnName = "intIdUnidadMedida")
    private Long intIdUnidadMedida;

}
