/*
 * @fileoverview    {Consecutivos}
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
 * TODO: Description of {@code Consecutivos}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"Consecutivos\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Consecutivos implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdConsecutivo;
    @Column(length = 255)
    private String strResolucion;
    private Integer intValorInicial;
    private Integer intValorFinal;
    private Integer intIncremento;
    private Integer intValorActual;
    @Column(length = 255)
    private String strCaracterLlenado;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaInicial;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaFinal;
    @Column(length = 255)
    private String strSufijo;
    @Column(length = 255)
    private String strPrefijo;
    private Boolean bitHabilitado;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdTipoDocumento", referencedColumnName = "intIdTipoDocumento")
    private Long intIdTipoDocumento;

}
