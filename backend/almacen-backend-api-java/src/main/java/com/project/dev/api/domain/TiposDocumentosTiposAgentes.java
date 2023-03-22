/*
 * @fileoverview    {TiposDocumentosTiposAgentes}
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
 * TODO: Definición de {@code TiposDocumentosTiposAgentes}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"TiposDocumentosTiposAgentes\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class TiposDocumentosTiposAgentes implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdTipoDocumentoTipoAgente;
    private Boolean bitActivo;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdTipoAgente", referencedColumnName = "intIdTipoAgente")
    private Long intIdTipoAgente;
    @JoinColumn(name = "intIdTipoDocumento", referencedColumnName = "intIdTipoDocumento")
    private Long intIdTipoDocumento;

}
