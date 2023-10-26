/*
 * @fileoverview    {RemisionesComprasDTO}
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
 * TODO: Definición de {@code RemisionesComprasDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RemisionesComprasDTO {

    private Long intIdRemisionCompra;
    private String strNumeroRemisionCompra;
    private Date dtFechaContabilizacion;
    private Date dtFechaValidez;
    private Date dtFechaDocumento;
    private Date dtFechaNecesaria;
    private String strNumeroReferencia;
    private BigDecimal decTotalBruto;
    private Double dblPorcentajeDescuento;
    private Double dblPorcentajeImpuesto;
    private BigDecimal decValorTotal;
    private String strComentarios;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdInterlocutor;
    private Long intIdRemision;
    private Long intIdTipoDocumento;

}
