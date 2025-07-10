/*
 * @overview        {SociedadFacade}
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
import { SociedadViewModel } from '../model/sociedad.model';
import { SociedadState } from '../state/sociedad.state';
import { SociedadService } from '../service/sociedad.service';

/**
 * TODO: Description of {@code SociedadFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class SociedadFacade extends GenericFacade<SociedadViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: SociedadService,
        entityState: SociedadState) {
        super(entityService, entityState);
    }

}
