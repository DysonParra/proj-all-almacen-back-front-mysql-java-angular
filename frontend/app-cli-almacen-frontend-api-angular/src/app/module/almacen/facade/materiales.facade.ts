/*
 * @overview        {MaterialesFacade}
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
import { MaterialesViewModel } from '../model/materiales.model';
import { MaterialesState } from '../state/materiales.state';
import { MaterialesService } from '../service/materiales.service';

/**
 * TODO: Description of {@code MaterialesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MaterialesFacade extends GenericFacade<MaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MaterialesService,
        entityState: MaterialesState) {
        super(entityService, entityState);
    }

}
