/*
 * @fileoverview    {ConceptosFacade}
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
import { ConceptosViewModel } from '../model/conceptos.model';
import { ConceptosState } from '../state/conceptos.state';
import { ConceptosService } from '../service/conceptos.service';

/**
 * TODO: Description of {@code ConceptosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ConceptosFacade extends GenericFacade<ConceptosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ConceptosService,
        entityState: ConceptosState) {
        super(entityService, entityState);
    }

}
