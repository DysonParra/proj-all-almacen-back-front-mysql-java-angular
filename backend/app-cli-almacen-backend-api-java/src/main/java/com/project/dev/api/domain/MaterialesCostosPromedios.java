/*
 * @fileoverview    {MaterialesCostosPromedios}
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
 * TODO: Description of {@code MaterialesCostosPromedios}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"MaterialesCostosPromedios\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MaterialesCostosPromedios implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdMaterialCostoPromedio;
    private BigDecimal decCostoPromedio;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaInicial;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaFinal;
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    private Long intIdMaterial;
    private String strCodigoMaterial;

}
