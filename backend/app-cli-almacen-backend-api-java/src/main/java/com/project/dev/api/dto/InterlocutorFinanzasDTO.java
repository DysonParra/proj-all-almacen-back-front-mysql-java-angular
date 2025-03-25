/*
 * @fileoverview    {InterlocutorFinanzasDTO}
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
 * TODO: Description of {@code InterlocutorFinanzasDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class InterlocutorFinanzasDTO {

    private Long intIdInterlocutorFinanzas;
    private Boolean bitImpuesto;
    private Boolean bitSujetoRetencion;
    private String strNumeroCertificadoRetencion;
    private Date dtFechaVencimiento;
    private String strNumeroAfiliacionSeguridad;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdInterlocutor;

}
