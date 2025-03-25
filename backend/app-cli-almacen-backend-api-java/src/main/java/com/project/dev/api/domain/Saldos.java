/*
 * @fileoverview    {Saldos}
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
 * TODO: Description of {@code Saldos}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"saldos\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Saldos implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdSaldo;
    private Long intIdEstadoSaldo;
    private Long intIdUbicacion;
    private String strCodigoProducto;
    private BigDecimal decCantidad;
    private String strUsuario;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;

}
