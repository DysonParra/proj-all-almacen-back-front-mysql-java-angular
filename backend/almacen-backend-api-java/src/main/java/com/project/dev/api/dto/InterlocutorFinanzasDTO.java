/*
 * @fileoverview    {InterlocutorFinanzasDTO} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code InterlocutorFinanzasDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
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
