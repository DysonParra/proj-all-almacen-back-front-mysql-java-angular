/*
 * @fileoverview    {OrdenProduccionDTO}
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
package com.project.dev.api.dto;

import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code OrdenProduccionDTO}.
 *
 * @author Dyson Parra
 * @since 11
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class OrdenProduccionDTO {

    private String strNumeroOrden;
    private String strReferencia;
    private Long intIdEstadoProduccion;
    private Long intIdRutaOrdenTrabajo;
    private Long intIdCentroTrabajo;
    private Date dtFechaEstimada;
    private Date dtFechaInicioEstimada;
    private Date dtFechaFinalizacion;
    private BigDecimal decCantidadPlanificada;
    private String strOrigenOrden;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdListaMateriales;
    private String strCodigoMaterial;
    private Long intIdUnidadMedida;

}
