/*
 * @fileoverview    {MmTmcCaracteristica}
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
 * TODO: Description of {@code MmTmcCaracteristica}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"MmTmcCaracteristica\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MmTmcCaracteristica implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdMmTmcCaracteristica;
    private Long intIdTipoMaterialCaracteristica;
    @Column(length = 255)
    private String strTipoMaterial;
    @Column(length = 255)
    private String strDescripcionTipoMaterialCaracteristica;
    private Integer intTipoDato;
    @Column(length = 255)
    private String strReglaValidacion;
    private Boolean bitVisibleDetalle;
    private Integer intOrdenDetall;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdTipoMaterial", referencedColumnName = "intIdTipoMaterial")
    private Long intIdTipoMaterial;

}
