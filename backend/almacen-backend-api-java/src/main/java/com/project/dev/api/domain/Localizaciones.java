/*
 * @fileoverview    {Localizaciones}
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
 * TODO: Description of {@code Localizaciones}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Localizaciones\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Localizaciones implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdLocalizacion;
    @Column(length = 255)
    private String strNombreLocalizacion;
    @Column(length = 255)
    private String strDireccion;
    @Column(length = 255)
    private String strCodigoPostal;
    @Column(length = 255)
    private String strPoBox;
    @Column(length = 255)
    private String strCiudad;
    @Column(length = 255)
    private String strPais;
    @Column(length = 255)
    private String strRegion;
    @Column(length = 255)
    private String strTelefono;
    @Column(length = 255)
    private String strCelular;
    @Column(length = 255)
    private String strFax;
    @Column(length = 255)
    private String strEmail;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdInterlocutor", referencedColumnName = "intIdInterlocutorComercial")
    private Long intIdInterlocutor;
    @JoinColumn(name = "intIdBodega", referencedColumnName = "intIdBodega")
    private Long intIdBodega;

}
