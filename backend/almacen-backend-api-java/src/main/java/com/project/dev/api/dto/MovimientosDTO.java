/*
 * @fileoverview    {MovimientosDTO}
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
 * TODO: Definición de {@code MovimientosDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MovimientosDTO {

    private Long intIdMovimiento;
    private String strNumeroDocumento;
    private Date dtFechaCreacion;
    private Date dtFechaAnulacion;
    private BigDecimal decSobreCosto;
    private BigDecimal decSobreCostoAplicadoProducto;
    private String strObservaciones;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdBodega;
    private Long intIdConcepto;
    private Long intIdEstadoMovimiento;
    private Long intIdRemision;
    private Long intIdTipoDocumento;
    private Long intIdTipoMovimiento;

}
