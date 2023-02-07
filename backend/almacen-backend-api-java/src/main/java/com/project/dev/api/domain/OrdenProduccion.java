/*
 * @fileoverview    {OrdenProduccion} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code OrdenProduccion}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"OrdenProduccion\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class OrdenProduccion implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false, length = 20)
    private String strNumeroOrden;
    @Column(length = 20)
    private String strReferencia;
    private Long intIdEstadoProduccion;
    private Long intIdRutaOrdenTrabajo;
    private Long intIdCentroTrabajo;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaEstimada;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaInicioEstimada;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaFinalizacion;
    @Column(precision = 18, scale = 1)
    private BigDecimal decCantidadPlanificada;
    @Column(length = 20)
    private String strOrigenOrden;
    @Column(length = 20)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdListaMateriales", referencedColumnName = "intIdListaMaterial")
    private Long intIdListaMateriales;
    @JoinColumn(name = "strCodigoMaterial", referencedColumnName = "strCodigoMaterial")
    private String strCodigoMaterial;
    @JoinColumn(name = "intIdUnidadMedida", referencedColumnName = "intIdUnidadMedida")
    private Long intIdUnidadMedida;

}
