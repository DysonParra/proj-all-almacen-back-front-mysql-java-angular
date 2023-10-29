/*
 * @fileoverview    {Materiales}
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
 * @since 11
 */
@Entity
@Table(name = "\"Materiales\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Materiales implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdMaterial;
    @Column(length = 255)
    private String strCodigoMaterial;
    @Column(length = 255)
    private String strReferencia;
    private Boolean bitGeneraRecibo;
    private Boolean bitVentaApartado;
    private Boolean bitPermiteDevolucion;
    @Column(length = 255)
    private String strSimbolo;
    @Column(precision = 12, scale = 0)
    private Float fltValorUnitario;
    @Column(precision = 12, scale = 0)
    private Float fltCosto;
    private Boolean bitConsumible;
    private Boolean bitProducible;
    private Boolean bitComprable;
    private Boolean bitVendible;
    private Boolean bitActivo;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdTiposMateriales", referencedColumnName = "intIdTipoMaterial")
    private Long intIdTiposMateriales;

}
