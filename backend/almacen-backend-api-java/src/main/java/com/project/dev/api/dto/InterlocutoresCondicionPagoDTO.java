/*
 * @fileoverview    {InterlocutoresCondicionPagoDTO} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code InterlocutoresCondicionPagoDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class InterlocutoresCondicionPagoDTO {

    private Long intIdInterlocutorCondicionPago;
    private String strNombreCondicion;
    private Float fltInteresMora;
    private Float fltDescuentoTotal;
    private BigDecimal decCupoCredito;
    private String strNumeroCuenta;
    private String strSucursal;
    private String strClaveControl;
    private Boolean bitEntregaParcial;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdCondicionPago;
    private Long intIdInterlocutor;
    private Long intIdListaPrecio;

}
