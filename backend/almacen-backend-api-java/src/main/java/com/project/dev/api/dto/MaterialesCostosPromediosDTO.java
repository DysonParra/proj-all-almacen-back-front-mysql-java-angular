/*
 * @fileoverview    {MaterialesCostosPromediosDTO} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code MaterialesCostosPromediosDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MaterialesCostosPromediosDTO {

    private Long intIdMaterialCostoPromedio;
    private BigDecimal decCostoPromedio;
    private Date dtFechaInicial;
    private Date dtFechaFinal;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdMaterial;
    private String strCodigoMaterial;

}
