/*
 * @fileoverview    {MaterialesDTO}
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
 * TODO: Description of {@code MaterialesDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MaterialesDTO {

    private Long intIdMaterial;
    private String strCodigoMaterial;
    private String strReferencia;
    private Boolean bitGeneraRecibo;
    private Boolean bitVentaApartado;
    private Boolean bitPermiteDevolucion;
    private String strSimbolo;
    private Float fltValorUnitario;
    private Float fltCosto;
    private Boolean bitConsumible;
    private Boolean bitProducible;
    private Boolean bitComprable;
    private Boolean bitVendible;
    private Boolean bitActivo;
    private String strUsuario;
    private Date dtFecha;
    private Long intIdTiposMateriales;

}
