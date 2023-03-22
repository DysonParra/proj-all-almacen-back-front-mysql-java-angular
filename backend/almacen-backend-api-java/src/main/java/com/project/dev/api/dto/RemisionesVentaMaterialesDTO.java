/*
 * @fileoverview    {RemisionesVentaMaterialesDTO}
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
package com.project.dev.api.dto;

import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code RemisionesVentaMaterialesDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RemisionesVentaMaterialesDTO {

    private Long intIdRemisionVentaMaterial;
    private String strCodigoMaterial;
    private Date dtFechaNecesaria;
    private Date dtFechaSolicitud;
    private Double dblCantidad;
    private BigDecimal decValorUnitario;
    private Float fltPorcentajeDescuento;
    private BigDecimal decCostoPromedio;
    private Long intIdRemisionCompra;
    private BigDecimal decCantidadUnidadMedida;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdMaterial;
    private String strNumeroDocumento;
    private Long intIdUnidadMedida;

}
