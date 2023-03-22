/*
 * @fileoverview    {RemisionesCompras}
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
 * TODO: Definición de {@code RemisionesCompras}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"RemisionesCompras\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RemisionesCompras implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdRemisionCompra;
    @Column(length = 255)
    private String strNumeroRemisionCompra;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaContabilizacion;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaValidez;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaDocumento;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaNecesaria;
    @Column(length = 255)
    private String strNumeroReferencia;
    @Column(precision = 10, scale = 2)
    private BigDecimal decTotalBruto;
    @Column(precision = 22, scale = 0)
    private Double dblPorcentajeDescuento;
    @Column(precision = 22, scale = 0)
    private Double dblPorcentajeImpuesto;
    @Column(precision = 10, scale = 2)
    private BigDecimal decValorTotal;
    @Column(length = 255)
    private String strComentarios;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdInterlocutor", referencedColumnName = "intIdInterlocutorComercial")
    private Long intIdInterlocutor;
    @JoinColumn(name = "intIdRemision", referencedColumnName = "intIdRemision")
    private Long intIdRemision;
    @JoinColumn(name = "intIdTipoDocumento", referencedColumnName = "intIdTipoDocumento")
    private Long intIdTipoDocumento;

}
