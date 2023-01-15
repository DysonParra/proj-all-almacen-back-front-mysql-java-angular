/*
 * @fileoverview    {InterlocutoresComercialesDTO} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code InterlocutoresComercialesDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class InterlocutoresComercialesDTO {

    private Long intIdInterlocutorComercial;
    private String strCodigoInterlocutor;
    private String strNumeroIdentificacionFinanciera;
    private String strNombreInterlocutor;
    private String strTelefono;
    private String strCelular;
    private String strFax;
    private String strEmail;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdGrupoInterlocutor;
    private Long intIdTipoInterlocutor;

}
