/*
 * @fileoverview    {CotizacionDTO} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code CotizacionDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class CotizacionDTO {

    private Integer intIdCotizacion;
    private Integer intCabecera;
    private int intIdProveedor;
    private String strEstado;
    private Long intCodigoMaterial;
    private String strDescripcionMaterial;
    private String strNombreProveedor;
    private String strBuzonProveedor;
    private double dblCantidadRequerida;
    private double dblCantidadCotizada;
    private Double dblValorCotizado;
    private Double dblDescuento;
    private Date dtFechaNecesaria;
    private Date dtFechaEntrega;
    private Date dtFechaCreacion;
    private Long intIdPlanCompra;

}
