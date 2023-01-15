/*
 * @fileoverview    {MaterialesDatosCompraDTO} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code MaterialesDatosCompraDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MaterialesDatosCompraDTO {

    private Long intIdMaterialDatoCompra;
    private String strCodigoMaterialCompra;
    private Boolean bitAutomaticPurchase;
    private Boolean bitGestionLotes;
    private BigDecimal decToleranciaEntregaInferior;
    private BigDecimal decToleranciaEntregaSuperior;
    private Integer intDiasEntrega;
    private Boolean bitRequiereInspeccion;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdMaterial;
    private Long intIdInterlocutor;
    private String strCodigoMaterial;
    private Long intIdUnidadMedidaBase;
    private Long intIdUnidadMedidaCompra;

}
