/*
 * @fileoverview    {RemisionesVentaMateriales}
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
 * TODO: Description of {@code RemisionesVentaMateriales}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"RemisionesVentaMateriales\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RemisionesVentaMateriales implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdRemisionVentaMaterial;
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
    private Long intIdRemisionCompra;
    @Column(precision = 18, scale = 1)
    private BigDecimal decCantidadUnidadMedida;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdMaterial", referencedColumnName = "intIdMaterial")
    private Long intIdMaterial;
    @JoinColumn(name = "strNumeroDocumento", referencedColumnName = "strNumeroDocumento")
    private String strNumeroDocumento;
    @JoinColumn(name = "intIdUnidadMedida", referencedColumnName = "intIdUnidadMedida")
    private Long intIdUnidadMedida;

}
