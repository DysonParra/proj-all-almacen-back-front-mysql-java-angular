/*
 * @fileoverview    {ListaDeMaterialesDTO}
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
 * TODO: Definición de {@code ListaDeMaterialesDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ListaDeMaterialesDTO {

    private Long intIdListaMaterial;
    private Date dtFechaInicio;
    private Date dtFechaFin;
    private Integer intCantidad;
    private BigDecimal decPrecioUnitario;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdBodega;
    private Long intIdTipoListaMaterial;
    private Long intIdListaPrecio;
    private String strCodigoMaterial;
    private String strCodigoComponente;
    private Long intIdUnidadMedida;

}
