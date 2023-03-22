/*
 * @fileoverview    {UnidadMedida}
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
 * TODO: Definición de {@code UnidadMedida}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"UnidadMedida\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class UnidadMedida implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdUnidadMedida;
    @Column(length = 255)
    private String strNombre;
    @Column(length = 255)
    private String strSimbolo;
    @Column(precision = 12, scale = 0)
    private Float fltFactor;
    @Column(precision = 12, scale = 0)
    private Float fltPrecision;
    @Column(precision = 12, scale = 0)
    private Float fltConversion;
    private Integer intDecimales;
    private Boolean bitActivo;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdTipoUnidadMedida", referencedColumnName = "intIdTipoUnidadMedida")
    private Long intIdTipoUnidadMedida;

}
