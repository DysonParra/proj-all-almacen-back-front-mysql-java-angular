/*
 * @fileoverview    {OrdenProduccion}
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
 * TODO: Description of {@code OrdenProduccion}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
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
    @Column(nullable = false)
    private String strNumeroOrden;
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
    private BigDecimal decCantidadPlanificada;
    private String strOrigenOrden;
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    private Long intIdListaMateriales;
    private String strCodigoMaterial;
    private Long intIdUnidadMedida;

}
