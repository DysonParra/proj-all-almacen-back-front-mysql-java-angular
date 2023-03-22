/*
 * @fileoverview    {PlanCompraDTO}
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
 * TODO: Definición de {@code PlanCompraDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class PlanCompraDTO {

    private Long intIdPlanCompra;
    private Long intCodigoMaterial;
    private String strDescripcion;
    private double dblCantidad;
    private Integer intIdGrupoProveedor;
    private Date dtFechaExplosion;
    private Date dtFechaCreacion;
    private Date dtFechaModificacion;
    private String strUsuario;
    private String strEstado;

}
