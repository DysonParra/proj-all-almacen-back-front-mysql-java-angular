/*
 * @fileoverview    {RemisionesComprasMateriales}
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
 * TODO: Definición de {@code RemisionesComprasMateriales}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"RemisionesComprasMateriales\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RemisionesComprasMateriales implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdRemisionCompraMaterial;
    @Column(length = 255)
    private String strNumeroRemisionCompra;
    @Column(length = 255)
    private String strCodigoMaterial;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaNecesaria;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaSolicitud;
    @Column(precision = 22, scale = 0)
    private Double dblCantidad;
    @Column(precision = 10, scale = 2)
    private BigDecimal decValorUnitario;
    @Column(precision = 12, scale = 0)
    private Float fltPorcentajeDescuento;
    @Column(precision = 10, scale = 2)
    private BigDecimal decCostoPromedio;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdMaterial", referencedColumnName = "intIdMaterial")
    private Long intIdMaterial;
    @JoinColumn(name = "intIdRemisionCompra", referencedColumnName = "intIdRemisionCompra")
    private Long intIdRemisionCompra;

}
