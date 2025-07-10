/*
 * @overview        {ListaDeMaterialesDTO}
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
 * TODO: Description of {@code ListaDeMaterialesDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ListaDeMaterialesDTO {

    private Long intIdListaMaterial;
    private Long intIdUnidadMedida;
    private Long intIdTipoListaMaterial;
    private Long intIdBodega;
    private Date dtFechaInicio;
    private Date dtFechaFin;
    private Integer intCantidad;
    private String strCodigoMaterial;
    private String strCodigoComponente;
    private Long intIdListaPrecio;
    private BigDecimal decPrecioUnitario;
    private String strUsuario;
    private Date dtFecha;

}
