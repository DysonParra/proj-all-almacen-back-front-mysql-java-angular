/*
 * @overview        {TiposDocumentosFacade}
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
import { TiposDocumentosViewModel } from '../model/tipos-documentos.model';
import { TiposDocumentosState } from '../state/tipos-documentos.state';
import { TiposDocumentosService } from '../service/tipos-documentos.service';

/**
 * TODO: Description of {@code TiposDocumentosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TiposDocumentosFacade extends GenericFacade<TiposDocumentosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TiposDocumentosService,
        entityState: TiposDocumentosState) {
        super(entityService, entityState);
    }

}
