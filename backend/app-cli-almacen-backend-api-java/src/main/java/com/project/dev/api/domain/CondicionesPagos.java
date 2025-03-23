/*
 * @fileoverview    {CondicionesPagos}
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
 * TODO: Description of {@code CondicionesPagos}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"CondicionesPagos\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class CondicionesPagos implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdCondicionPago;
    private String strNombreCondicion;
    private String strDescripcion;
    private Boolean bitDeudor;
    private Boolean bitAcreedor;
    private Integer intDiiaFijo;
    private Integer intMesesAdicionales;
    private Integer intDiasTolerancia;
    private Integer intNumeroPlazos;
    private Float fltDescuentoTotal;
    private Float fltInteresCredito;
    private BigDecimal decHaberMaximo;
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;

}
