/*
 * @fileoverview    {MovimientosDetalles} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code MovimientosDetalles}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"MovimientosDetalles\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MovimientosDetalles implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdMovimientoDetalle;
    @Column(precision = 10, scale = 2)
    private BigDecimal decValorUnitario;
    @Column(precision = 10, scale = 2)
    private BigDecimal decSobreCosto;
    @Column(precision = 10, scale = 2)
    private BigDecimal decCantidad;
    @Column(length = 255)
    private String strUsuario;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdEstadoSaldo", referencedColumnName = "intIdEstadoSaldo")
    private Long intIdEstadoSaldo;
    @JoinColumn(name = "strCodigoProducto", referencedColumnName = "strCodigoMaterial")
    private String strCodigoProducto;
    @JoinColumn(name = "strNumeroDocumento", referencedColumnName = "strNumeroDocumento")
    private String strNumeroDocumento;

}
