/*
 * @fileoverview    {ConsecutivosDTO}
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
 * TODO: Description of {@code ConsecutivosDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ConsecutivosDTO {

    private Long intIdConsecutivo;
    private String strResolucion;
    private Integer intValorInicial;
    private Integer intValorFinal;
    private Integer intIncremento;
    private Integer intValorActual;
    private String strCaracterLlenado;
    private Date dtFechaInicial;
    private Date dtFechaFinal;
    private String strSufijo;
    private String strPrefijo;
    private Boolean bitHabilitado;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdTipoDocumento;

}
