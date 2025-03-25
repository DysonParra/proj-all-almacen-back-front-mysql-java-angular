/*
 * @fileoverview    {TiposDocumentosTiposAgentesState}
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
import { Injectable } from '@angular/core';
import { GenericState } from '@app/module/essential/state/generic.state';
import { TiposDocumentosTiposAgentesViewModel } from '../model/tipos-documentos-tipos-agentes.model';

/**
 * TODO: Description of {@code TiposDocumentosTiposAgentesState}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TiposDocumentosTiposAgentesState extends GenericState<TiposDocumentosTiposAgentesViewModel> {

}
