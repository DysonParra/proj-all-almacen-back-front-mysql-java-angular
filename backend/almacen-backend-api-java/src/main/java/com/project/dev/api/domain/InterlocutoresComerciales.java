/*
 * @fileoverview    {InterlocutoresComerciales}
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
 * TODO: Definición de {@code InterlocutoresComerciales}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"InterlocutoresComerciales\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class InterlocutoresComerciales implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdInterlocutorComercial;
    @Column(length = 255)
    private String strCodigoInterlocutor;
    @Column(length = 255)
    private String strNumeroIdentificacionFinanciera;
    @Column(length = 255)
    private String strNombreInterlocutor;
    @Column(length = 255)
    private String strTelefono;
    @Column(length = 255)
    private String strCelular;
    @Column(length = 255)
    private String strFax;
    @Column(length = 255)
    private String strEmail;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdGrupoInterlocutor", referencedColumnName = "intIdGrupoInterlocutor")
    private Long intIdGrupoInterlocutor;
    @JoinColumn(name = "intIdTipoInterlocutor", referencedColumnName = "intIdTipoInterlocutorComercial")
    private Long intIdTipoInterlocutor;

}
