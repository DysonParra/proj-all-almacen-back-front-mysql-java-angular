/*
 * @fileoverview    {Cotizacion}
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
 * TODO: Description of {@code Cotizacion}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Cotizacion\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Cotizacion implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdCotizacion;
    private Integer intCabecera;
    @Basic(optional = false)
    @Column(nullable = false)
    private int intIdProveedor;
    @Column(length = 20)
    private String strEstado;
    private Long intCodigoMaterial;
    @Column(length = 256)
    private String strDescripcionMaterial;
    @Column(length = 256)
    private String strNombreProveedor;
    @Column(length = 256)
    private String strBuzonProveedor;
    @Basic(optional = false)
    @Column(nullable = false)
    private double dblCantidadRequerida;
    @Basic(optional = false)
    @Column(nullable = false)
    private double dblCantidadCotizada;
    @Column(precision = 22, scale = 0)
    private Double dblValorCotizado;
    @Column(precision = 22, scale = 0)
    private Double dblDescuento;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaNecesaria;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaEntrega;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaCreacion;
    @JoinColumn(name = "intIdPlanCompra", referencedColumnName = "intIdPlanCompra", nullable = false)
    private Long intIdPlanCompra;

}
