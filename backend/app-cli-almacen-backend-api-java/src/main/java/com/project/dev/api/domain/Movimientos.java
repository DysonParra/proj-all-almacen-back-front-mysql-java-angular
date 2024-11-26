/*
 * @fileoverview    {Movimientos}
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
 * TODO: Description of {@code Movimientos}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Movimientos\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Movimientos implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdMovimiento;
    @Column(length = 255)
    private String strNumeroDocumento;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaCreacion;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaAnulacion;
    @Column(precision = 10, scale = 2)
    private BigDecimal decSobreCosto;
    @Column(precision = 10, scale = 2)
    private BigDecimal decSobreCostoAplicadoProducto;
    @Column(length = 255)
    private String strObservaciones;
    @Column(length = 255)
    private String strUsuario;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdBodega", referencedColumnName = "intIdBodega")
    private Long intIdBodega;
    @JoinColumn(name = "intIdConcepto", referencedColumnName = "intIdConcepto")
    private Long intIdConcepto;
    @JoinColumn(name = "intIdEstadoMovimiento", referencedColumnName = "intIdEstadoMovimiento")
    private Long intIdEstadoMovimiento;
    @JoinColumn(name = "intIdRemision", referencedColumnName = "intIdRemision")
    private Long intIdRemision;
    @JoinColumn(name = "intIdTipoDocumento", referencedColumnName = "intIdTipoDocumento")
    private Long intIdTipoDocumento;
    @JoinColumn(name = "intIdTipoMovimiento", referencedColumnName = "intIdTipoMovimiento")
    private Long intIdTipoMovimiento;

}
