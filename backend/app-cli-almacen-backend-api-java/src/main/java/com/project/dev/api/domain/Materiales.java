/*
 * @overview        {Materiales}
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
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code Materiales}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"materiales\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Materiales implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
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
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    private Long intIdTiposMateriales;

}
