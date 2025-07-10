/*
 * @overview        {TiposDocumentosConceptosFacade}
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
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { TiposDocumentosConceptosViewModel } from '../model/tipos-documentos-conceptos.model';
import { TiposDocumentosConceptosState } from '../state/tipos-documentos-conceptos.state';
import { TiposDocumentosConceptosService } from '../service/tipos-documentos-conceptos.service';

/**
 * TODO: Description of {@code TiposDocumentosConceptosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TiposDocumentosConceptosFacade extends GenericFacade<TiposDocumentosConceptosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TiposDocumentosConceptosService,
        entityState: TiposDocumentosConceptosState) {
        super(entityService, entityState);
    }

}
