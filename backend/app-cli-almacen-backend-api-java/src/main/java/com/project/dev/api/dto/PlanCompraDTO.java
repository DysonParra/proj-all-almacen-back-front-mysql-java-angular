/*
 * @overview        {PlanCompraDTO}
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

import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code PlanCompraDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class PlanCompraDTO {

    private Long intIdPlanCompra;
    private Long intCodigoMaterial;
    private String strDescripcion;
    private Double dblCantidad;
    private Integer intIdGrupoProveedor;
    private Date dtFechaExplosion;
    private Date dtFechaCreacion;
    private Date dtFechaModificacion;
    private String strUsuario;
    private String strEstado;

}
