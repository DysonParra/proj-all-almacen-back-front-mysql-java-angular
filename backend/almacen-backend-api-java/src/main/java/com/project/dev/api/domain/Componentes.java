/*
 * @fileoverview    {Componentes} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code Componentes}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Componentes\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Componentes implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdComponente;
    private Long intIdAlmacen;
    @Column(precision = 18, scale = 1)
    private BigDecimal decCantidadBase;
    @Column(precision = 18, scale = 1)
    private BigDecimal decCantidadRequerida;
    @Column(precision = 18, scale = 1)
    private BigDecimal decCantidadAdicional;
    @Column(precision = 18, scale = 1)
    private BigDecimal decCantidadConsumida;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaEstimada;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaEfectiva;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaInicio;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaFinal;
    private Long intIdEstadoComponente;
    @Column(length = 20)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "strCodigoMaterial", referencedColumnName = "strCodigoMaterial")
    private String strCodigoMaterial;
    @JoinColumn(name = "strNumeroOrden", referencedColumnName = "strNumeroOrden")
    private String strNumeroOrden;
    @JoinColumn(name = "intIdUnidadMedida", referencedColumnName = "intIdUnidadMedida")
    private Long intIdUnidadMedida;

}
