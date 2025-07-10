/*
 * @overview        {TiposDocumentosConceptosState}
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
import { TiposDocumentosConceptosViewModel } from '../model/tipos-documentos-conceptos.model';

/**
 * TODO: Description of {@code TiposDocumentosConceptosState}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TiposDocumentosConceptosState extends GenericState<TiposDocumentosConceptosViewModel> {

}
