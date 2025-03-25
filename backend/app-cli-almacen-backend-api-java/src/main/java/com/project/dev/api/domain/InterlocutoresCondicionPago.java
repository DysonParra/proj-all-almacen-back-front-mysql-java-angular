/*
 * @fileoverview    {InterlocutoresCondicionPago}
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
 * TODO: Description of {@code InterlocutoresCondicionPago}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"interlocutores_condicion_pago\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class InterlocutoresCondicionPago implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdInterlocutorCondicionPago;
    private String strNombreCondicion;
    private Float fltInteresMora;
    private Float fltDescuentoTotal;
    private BigDecimal decCupoCredito;
    private String strNumeroCuenta;
    private String strSucursal;
    private String strClaveControl;
    private Boolean bitEntregaParcial;
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    private Long intIdCondicionPago;
    private Long intIdInterlocutor;
    private Long intIdListaPrecio;

}
