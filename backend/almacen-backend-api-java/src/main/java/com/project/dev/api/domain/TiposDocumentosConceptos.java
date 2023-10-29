/*
 * @fileoverview    {TiposDocumentosConceptos}
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
 * TODO: Definición de {@code TiposDocumentosConceptos}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"TiposDocumentosConceptos\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class TiposDocumentosConceptos implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdTipoDocumentoConcepto;
    private Boolean bitActivo;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdConcepto", referencedColumnName = "intIdConcepto")
    private Long intIdConcepto;
    @JoinColumn(name = "intIdTipoDocumento", referencedColumnName = "intIdTipoDocumento")
    private Long intIdTipoDocumento;

}
