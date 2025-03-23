/*
 * @fileoverview    {EstadosSaldos}
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
 * TODO: Description of {@code EstadosSaldos}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"EstadosSaldos\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class EstadosSaldos implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdEstadoSaldo;
    private String strDescripcionEstadoSaldo;
    private String strCodigoColor;
    private Boolean bitEstaEnReposicion;
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;

}
