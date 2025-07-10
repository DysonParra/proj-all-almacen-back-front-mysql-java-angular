/*
 * @overview        {ZonasFacade}
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
import { ZonasViewModel } from '../model/zonas.model';
import { ZonasState } from '../state/zonas.state';
import { ZonasService } from '../service/zonas.service';

/**
 * TODO: Description of {@code ZonasFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ZonasFacade extends GenericFacade<ZonasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ZonasService,
        entityState: ZonasState) {
        super(entityService, entityState);
    }

}
