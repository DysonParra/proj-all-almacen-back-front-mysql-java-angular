/*
 * @fileoverview    {ZonasDTO} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code ZonasDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ZonasDTO {

    private String strCodigoZona;
    private String strDescripcionZona;
    private Boolean bitTransitoDirecto;
    private Boolean bitPicking;
    private Boolean bitUbicacion;
    private Boolean bitDespacho;
    private Boolean bitRecepcion;
    private Boolean bitActivo;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdBodega;

}
